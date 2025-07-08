import Mustache from 'mustache'
import StateAware from '~/output/StateAware'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import ApiModelNameRepositoryInterfacePhpStub from '@/assets/stubs/Api/ModelNameRepositoryInterface.php.stub?raw'
import ApiDataModelNameSearchResultsInterfacePhpStub from '@/assets/stubs/Api/Data/ModelNameSearchResultsInterface.php.stub?raw'
import ApiDataModelNameInterfacePhpStub from '@/assets/stubs/Api/Data/ModelNameInterface.php.stub?raw'
import BlockAdminhtmlModelNameEditSaveButtonphpstub from '@/assets/stubs/Block/Adminhtml/ModelName/Edit/SaveButton.php.stub?raw'
import BlockAdminhtmlModelNameEditDeleteButtonphpstub from '@/assets/stubs/Block/Adminhtml/ModelName/Edit/DeleteButton.php.stub?raw'
import BlockAdminhtmlModelNameEditBackButtonphpstub from '@/assets/stubs/Block/Adminhtml/ModelName/Edit/BackButton.php.stub?raw'
import BlockAdminhtmlModelNameEditGenericButtonphpstub from '@/assets/stubs/Block/Adminhtml/ModelName/Edit/GenericButton.php.stub?raw'
import etcdiXmlStub from '@/assets/stubs/etc/di.xml.stub?raw'
import etcadminhtmlmenuXmlStub from '@/assets/stubs/etc/adminhtml/menu.xml.stub?raw'
import etcadminhtmlroutesXmlStub from '@/assets/stubs/etc/adminhtml/routes.xml.stub?raw'
import ModelModelNameSearchResultsPhpStub from '@/assets/stubs/Model/ModelNameSearchResults.php.stub?raw'
import ModelResourceModelModelNamePhpStub from '@/assets/stubs/Model/ResourceModel/ModelName.php.stub?raw'
import ModelResourceModelModelNameCollectionPhpStub from '@/assets/stubs/Model/ResourceModel/ModelName/Collection.php.stub?raw'
import etcmoduleXmlStub from '@/assets/stubs/etc/module.xml.stub?raw'
import registrationPhpStub from '@/assets/stubs/registration.php.stub?raw'
import composerjsonstub from '@/assets/stubs/composer.json.stub?raw'
import ModelModelNameRepositoryWithDataModelPhpStub from '@/assets/stubs/Model/ModelNameRepositoryWithDataModel.php.stub?raw'
import ModelModelNameWithDataModelPhpStub from '@/assets/stubs/Model/ModelNameWithDataModel.php.stub?raw'
import ModelModelNameRepositoryWithoutDataModelPhpStub from '@/assets/stubs/Model/ModelNameRepositoryWithoutDataModel.php.stub?raw'
import ModelModelNameWithoutDataModelPhpStub from '@/assets/stubs/Model/ModelNameWithoutDataModel.php.stub?raw'
import ModelDataModelNamePhpStub from '@/assets/stubs/Model/Data/ModelName.php.stub?raw'
import ModelModelNameDataProviderphpstub from '@/assets/stubs/Model/ModelName/DataProvider.php.stub?raw'
import etcaclXmlStub from '@/assets/stubs/etc/acl.xml.stub?raw'
import ControllerAdminhtmlModelNameEditPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Edit.php.stub?raw'
import ControllerAdminhtmlModelNameDeletePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Delete.php.stub?raw'
import ControllerAdminhtmlModelNameIndexPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Index.php.stub?raw'
import ControllerAdminhtmlModelNameWithDataModelSavePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/SaveWithDataModel.php.stub?raw'
import ControllerAdminhtmlModelNameWithoutDataModelSavePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/SaveWithoutDataModel.php.stub?raw'
import viewadminhtmllayoutBaseName_indexXmlStub from '@/assets/stubs/view/adminhtml/layout/BaseName_index.xml.stub?raw'
import viewadminhtmllayoutBaseName_editXmlStub from '@/assets/stubs/view/adminhtml/layout/BaseName_edit.xml.stub?raw'
import viewadminhtmllayoutBaseName_newXmlStub from '@/assets/stubs/view/adminhtml/layout/BaseName_new.xml.stub?raw'
import viewadminhtmlui_componentFormNamexmlstub from '@/assets/stubs/view/adminhtml/ui_component/FormName.xml.stub?raw'
import ControllerAdminhtmlModelNameMassDeletePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/MassDelete.php.stub?raw'
import ControllerAdminhtmlModelNameNewActionPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/NewAction.php.stub?raw'
import UiComponentListingColumnActionsphpstub from '@/assets/stubs/Ui/Component/Listing/Column/Actions.php.stub?raw'

export default class GeneratedFile extends StateAware implements GeneratesFileInterface {
  private path: string

  private source: string | null

  constructor(path: string, source: string | null = null) {
    super()

    this.path = path
    this.source = source

    if (!source) {
      this.source = path
    }
  }

  getPath(): string {
    return this.path
      .replace(
        'ModelName',
        this.capitalizeFirstLetter(this.snakeToCamel(this.modelName()))
      )
      .replace(
        'FormName',
        this.formName()
      )
      .replace('BaseName', this.baseName())
      .replace('.stub', '')
  }

  getContents(): string {
    const mapping = {
      'Api/ModelNameRepositoryInterface.php.stub': ApiModelNameRepositoryInterfacePhpStub,
      'Api/Data/ModelNameSearchResultsInterface.php.stub': ApiDataModelNameSearchResultsInterfacePhpStub,
      'Api/Data/ModelNameInterface.php.stub': ApiDataModelNameInterfacePhpStub,
      'Block/Adminhtml/ModelName/Edit/SaveButton.php.stub': BlockAdminhtmlModelNameEditSaveButtonphpstub,
      'Block/Adminhtml/ModelName/Edit/DeleteButton.php.stub': BlockAdminhtmlModelNameEditDeleteButtonphpstub,
      'Block/Adminhtml/ModelName/Edit/BackButton.php.stub': BlockAdminhtmlModelNameEditBackButtonphpstub,
      'Block/Adminhtml/ModelName/Edit/GenericButton.php.stub': BlockAdminhtmlModelNameEditGenericButtonphpstub,
      'etc/di.xml.stub': etcdiXmlStub,
      'etc/adminhtml/menu.xml.stub': etcadminhtmlmenuXmlStub,
      'etc/adminhtml/routes.xml.stub': etcadminhtmlroutesXmlStub,
      'Model/ModelNameSearchResults.php.stub': ModelModelNameSearchResultsPhpStub,
      'Model/ResourceModel/ModelName.php.stub': ModelResourceModelModelNamePhpStub,
      'Model/ResourceModel/ModelName/Collection.php.stub': ModelResourceModelModelNameCollectionPhpStub,
      'etc/module.xml.stub': etcmoduleXmlStub,
      'registration.php.stub': registrationPhpStub,
      'composer.json.stub': composerjsonstub,
      'Model/ModelNameRepositoryWithDataModel.php.stub': ModelModelNameRepositoryWithDataModelPhpStub,
      'Model/ModelNameWithDataModel.php.stub': ModelModelNameWithDataModelPhpStub,
      'Model/ModelNameRepositoryWithoutDataModel.php.stub': ModelModelNameRepositoryWithoutDataModelPhpStub,
      'Model/ModelNameWithoutDataModel.php.stub': ModelModelNameWithoutDataModelPhpStub,
      'Model/Data/ModelName.php.stub': ModelDataModelNamePhpStub,
      'Model/ModelName/DataProvider.php.stub': ModelModelNameDataProviderphpstub,
      'etc/acl.xml.stub': etcaclXmlStub,
      'Controller/Adminhtml/ModelName/Edit.php.stub': ControllerAdminhtmlModelNameEditPhpStub,
      'Controller/Adminhtml/ModelName/Delete.php.stub': ControllerAdminhtmlModelNameDeletePhpStub,
      'Controller/Adminhtml/ModelName/Index.php.stub': ControllerAdminhtmlModelNameIndexPhpStub,
      'view/adminhtml/layout/BaseName_index.xml.stub': viewadminhtmllayoutBaseName_indexXmlStub,
      'view/adminhtml/layout/BaseName_edit.xml.stub': viewadminhtmllayoutBaseName_editXmlStub,
      'view/adminhtml/layout/BaseName_new.xml.stub': viewadminhtmllayoutBaseName_newXmlStub,
      'view/adminhtml/ui_component/FormName.xml.stub': viewadminhtmlui_componentFormNamexmlstub,
      'Controller/Adminhtml/ModelName/MassDelete.php.stub': ControllerAdminhtmlModelNameMassDeletePhpStub,
      'Controller/Adminhtml/ModelName/NewAction.php.stub': ControllerAdminhtmlModelNameNewActionPhpStub,
      'Controller/Adminhtml/ModelName/SaveWithDataModel.php.stub': ControllerAdminhtmlModelNameWithDataModelSavePhpStub,
      'Controller/Adminhtml/ModelName/SaveWithoutDataModel.php.stub': ControllerAdminhtmlModelNameWithoutDataModelSavePhpStub,
      'Ui/Component/Listing/Column/Actions.php.stub': UiComponentListingColumnActionsphpstub,
    }

    if (this.source === null) {
        throw new Error(`No source found for ${this.source}`)
    }

    if (!mapping[this.source]) {
        throw new Error(`No stub found for ${this.source}`)
    }

    return Mustache.render(mapping[this.source], this.fileContext())
  }

  snakeToCamel(input: string) {
    return input.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    )
  }

  capitalizeFirstLetter(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  isMergeable(): boolean {
    return ![
      'composer.json.stub',
      'registration.php',
      'etc/acl.xml',
      'etc/di.xml',
      'etc/module.xml',
      'etc/adminhtml/menu.xml',
      'etc/adminhtml/routes.xml',
    ].includes(this.getPath())
  }
}
