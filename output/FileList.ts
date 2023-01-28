import StateAware from '~/output/StateAware'
import GeneratedFile from '~/output/GeneratedFile'
import UiComponent from '~/output/listing/UiComponent'
import GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import DbSchemaWhitelist from '~/output/listing/DbSchemaWhitelist'
import DbSchema from '~/output/listing/DbSchema'

export default class FileList extends StateAware {
  generate() {
    const files = [
      new GeneratedFile(this.state, 'Api/ModelNameRepositoryInterface.php.stub'),
      new GeneratedFile(this.state, 'Api/Data/ModelNameSearchResultsInterface.php.stub'),
      new GeneratedFile(this.state, 'Api/Data/ModelNameInterface.php.stub'),
      new GeneratedFile(this.state, 'etc/di.xml.stub'),
      new GeneratedFile(this.state, 'etc/acl.xml.stub'),
      new GeneratedFile(this.state, 'Model/ResourceModel/ModelName.php.stub'),
      new GeneratedFile(this.state, 'Model/ResourceModel/ModelName/Collection.php.stub'),
      new DbSchemaWhitelist(this.state),
      new DbSchema(this.state),
    ]

    if (this.isAdmingrid()) {
      this.addAdmingridFiles(files)
    }

    if (this.includeModuleRegistration()) {
      files.push(new GeneratedFile(this.state, 'etc/module.xml.stub'))
      files.push(new GeneratedFile(this.state, 'registration.php.stub'))
    }

    if (this.includeDataModels()) {
      files.push(new GeneratedFile(this.state, 'Model/ModelNameRepository.php.stub', 'Model/ModelNameRepositoryWithDataModel.php.stub'))
      files.push(new GeneratedFile(this.state, 'Model/ModelName.php.stub', 'Model/ModelNameWithDataModel.php.stub'))
      files.push(new GeneratedFile(this.state, 'Model/Data/ModelName.php.stub'))
    } else {
      files.push(new GeneratedFile(this.state, 'Model/ModelNameRepository.php.stub', 'Model/ModelNameRepositoryWithoutDataModel.php.stub'))
      files.push(new GeneratedFile(this.state, 'Model/ModelName.php.stub', 'Model/ModelNameWithoutDataModel.php.stub'))
    }

    return files
  }

  private addAdmingridFiles(files: GeneratesFileInterface[]) {
    files.push(new GeneratedFile(this.state, 'Controller/Adminhtml/ModelName/Edit.php.stub'));
    files.push(new GeneratedFile(this.state, 'Controller/Adminhtml/ModelName/Delete.php.stub'));
    files.push(new GeneratedFile(this.state, 'Controller/Adminhtml/ModelName/Index.php.stub'));

    files.push(new GeneratedFile(this.state, 'view/adminhtml/layout/BaseName_index.xml.stub'))
    files.push(new UiComponent(this.state))

    if (this.isMassActions()) {
      files.push(new GeneratedFile(this.state, 'Controller/Adminhtml/ModelName/MassDelete.php.stub'))
    }

    if (this.isNewButtonsEnabled()) {
      files.push(new GeneratedFile(this.state, 'Controller/Adminhtml/ModelName/NewAction.php.stub'))
    }
  }
}
