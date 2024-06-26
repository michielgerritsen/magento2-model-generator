import StateAware from '~/output/StateAware'
import GeneratedFile from '~/output/GeneratedFile'
import UiComponent from '~/output/listing/UiComponent'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import DbSchemaWhitelist from '~/output/listing/DbSchemaWhitelist'
import DbSchema from '~/output/listing/DbSchema'
import UiComponentForm from "~/output/listing/UiComponentForm";

export default class FileList extends StateAware {
  generate() {
    const files = [
      new GeneratedFile('Api/ModelNameRepositoryInterface.php.stub'),
      new GeneratedFile('Api/Data/ModelNameSearchResultsInterface.php.stub'),
      new GeneratedFile('Api/Data/ModelNameInterface.php.stub'),
      new GeneratedFile('etc/di.xml.stub'),
      new GeneratedFile('Model/ModelNameSearchResults.php.stub'),
      new GeneratedFile('Model/ResourceModel/ModelName.php.stub'),
      new GeneratedFile('Model/ResourceModel/ModelName/Collection.php.stub'),
      new DbSchemaWhitelist(),
      new DbSchema(),
    ]

    if (this.isAdmingrid()) {
      this.addAdmingridFiles(files)
    }

    if (this.includeModuleRegistration()) {
      files.push(new GeneratedFile('etc/module.xml.stub'))
      files.push(new GeneratedFile('registration.php.stub'))
    }

    if (this.includeDataModels()) {
      files.push(new GeneratedFile('Model/ModelNameRepository.php.stub', 'Model/ModelNameRepositoryWithDataModel.php.stub'))
      files.push(new GeneratedFile('Model/ModelName.php.stub', 'Model/ModelNameWithDataModel.php.stub'))
      files.push(new GeneratedFile('Model/Data/ModelName.php.stub'))
    } else {
      files.push(new GeneratedFile('Model/ModelNameRepository.php.stub', 'Model/ModelNameRepositoryWithoutDataModel.php.stub'))
      files.push(new GeneratedFile('Model/ModelName.php.stub', 'Model/ModelNameWithoutDataModel.php.stub'))
    }

    return files
  }

  private addAdmingridFiles(files: GeneratesFileInterface[]) {
    files.push(new GeneratedFile('etc/acl.xml.stub'));
    files.push(new GeneratedFile('etc/adminhtml/routes.xml.stub'));
    files.push(new GeneratedFile('Controller/Adminhtml/ModelName/Edit.php.stub'));
    files.push(new GeneratedFile('Controller/Adminhtml/ModelName/Delete.php.stub'));
    files.push(new GeneratedFile('Controller/Adminhtml/ModelName/Index.php.stub'));

    files.push(new GeneratedFile('view/adminhtml/layout/BaseName_edit.xml.stub'))
    files.push(new GeneratedFile('view/adminhtml/layout/BaseName_new.xml.stub'))
    files.push(new GeneratedFile('Ui/Component/Listing/Column/Actions.php.stub'))
    files.push(new UiComponent())

    if (this.isMassActions()) {
      files.push(new GeneratedFile('Controller/Adminhtml/ModelName/MassDelete.php.stub'))
    }

    if (this.isNewButtonsEnabled()) {
      files.push(new GeneratedFile('Controller/Adminhtml/ModelName/Save.php.stub'))
      files.push(new GeneratedFile('view/adminhtml/layout/BaseName_index.xml.stub'))
      files.push(new GeneratedFile('Controller/Adminhtml/ModelName/NewAction.php.stub'))
      files.push(new GeneratedFile('Model/ModelName/DataProvider.php.stub'))
      files.push(new GeneratedFile('Block/Adminhtml/ModelName/Edit/SaveButton.php.stub'))
      files.push(new GeneratedFile('Block/Adminhtml/ModelName/Edit/DeleteButton.php.stub'))
      files.push(new GeneratedFile('Block/Adminhtml/ModelName/Edit/BackButton.php.stub'))
      files.push(new GeneratedFile('Block/Adminhtml/ModelName/Edit/GenericButton.php.stub'))
      files.push(new UiComponentForm('view/adminhtml/ui_component/FormName.xml.stub'))
    }

    if (this.addToMenu()) {
      files.push(new GeneratedFile('etc/adminhtml/menu.xml.stub'))
    }
  }
}
