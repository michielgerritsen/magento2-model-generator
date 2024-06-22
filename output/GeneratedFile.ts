import Mustache from 'mustache'
import StateAware from '~/output/StateAware'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import ApiModelNameRepositoryInterfacePhpStub from '@/assets/stubs/Api/ModelNameRepositoryInterface.php.stub?raw'
import ApiDataModelNameSearchResultsInterfacePhpStub from '@/assets/stubs/Api/Data/ModelNameSearchResultsInterface.php.stub?raw'
import ApiDataModelNameInterfacePhpStub from '@/assets/stubs/Api/Data/ModelNameInterface.php.stub?raw'
import etcdiXmlStub from '@/assets/stubs/etc/di.xml.stub?raw'
import ModelModelNameSearchResultsPhpStub from '@/assets/stubs/Model/ModelNameSearchResults.php.stub?raw'
import ModelResourceModelModelNamePhpStub from '@/assets/stubs/Model/ResourceModel/ModelName.php.stub?raw'
import ModelResourceModelModelNameCollectionPhpStub from '@/assets/stubs/Model/ResourceModel/ModelName/Collection.php.stub?raw'
import etcmoduleXmlStub from '@/assets/stubs/etc/module.xml.stub?raw'
import registrationPhpStub from '@/assets/stubs/registration.php.stub?raw'
import ModelModelNameRepositoryWithDataModelPhpStub from '@/assets/stubs/Model/ModelNameRepositoryWithDataModel.php.stub?raw'
import ModelModelNameWithDataModelPhpStub from '@/assets/stubs/Model/ModelNameWithDataModel.php.stub?raw'
import ModelModelNameRepositoryWithoutDataModelPhpStub from '@/assets/stubs/Model/ModelNameRepositoryWithoutDataModel.php.stub?raw'
import ModelModelNameWithoutDataModelPhpStub from '@/assets/stubs/Model/ModelNameWithoutDataModel.php.stub?raw'
import ModelDataModelNamePhpStub from '@/assets/stubs/Model/Data/ModelName.php.stub?raw'
import etcaclXmlStub from '@/assets/stubs/etc/acl.xml.stub?raw'
import ControllerAdminhtmlModelNameEditPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Edit.php.stub?raw'
import ControllerAdminhtmlModelNameDeletePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Delete.php.stub?raw'
import ControllerAdminhtmlModelNameIndexPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/Index.php.stub?raw'
import viewadminhtmllayoutBaseName_indexXmlStub from '@/assets/stubs/view/adminhtml/layout/BaseName_index.xml.stub?raw'
import ControllerAdminhtmlModelNameMassDeletePhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/MassDelete.php.stub?raw'
import ControllerAdminhtmlModelNameNewActionPhpStub from '@/assets/stubs/Controller/Adminhtml/ModelName/NewAction.php.stub?raw'

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
      .replace('BaseName', this.baseName())
      .replace('.stub', '')
  }

  getContents(): string {
    const mapping = {
      'Api/ModelNameRepositoryInterface.php.stub': ApiModelNameRepositoryInterfacePhpStub,
      'Api/Data/ModelNameSearchResultsInterface.php.stub': ApiDataModelNameSearchResultsInterfacePhpStub,
      'Api/Data/ModelNameInterface.php.stub': ApiDataModelNameInterfacePhpStub,
      'etc/di.xml.stub': etcdiXmlStub,
      'Model/ModelNameSearchResults.php.stub': ModelModelNameSearchResultsPhpStub,
      'Model/ResourceModel/ModelName.php.stub': ModelResourceModelModelNamePhpStub,
      'Model/ResourceModel/ModelName/Collection.php.stub': ModelResourceModelModelNameCollectionPhpStub,
      'etc/module.xml.stub': etcmoduleXmlStub,
      'registration.php.stub': registrationPhpStub,
      'Model/ModelNameRepositoryWithDataModel.php.stub': ModelModelNameRepositoryWithDataModelPhpStub,
      'Model/ModelNameWithDataModel.php.stub': ModelModelNameWithDataModelPhpStub,
      'Model/ModelNameRepositoryWithoutDataModel.php.stub': ModelModelNameRepositoryWithoutDataModelPhpStub,
      'Model/ModelNameWithoutDataModel.php.stub': ModelModelNameWithoutDataModelPhpStub,
      'Model/Data/ModelName.php.stub': ModelDataModelNamePhpStub,
      'etc/acl.xml.stub': etcaclXmlStub,
      'Controller/Adminhtml/ModelName/Edit.php.stub': ControllerAdminhtmlModelNameEditPhpStub,
      'Controller/Adminhtml/ModelName/Delete.php.stub': ControllerAdminhtmlModelNameDeletePhpStub,
      'Controller/Adminhtml/ModelName/Index.php.stub': ControllerAdminhtmlModelNameIndexPhpStub,
      'view/adminhtml/layout/BaseName_index.xml.stub': viewadminhtmllayoutBaseName_indexXmlStub,
      'Controller/Adminhtml/ModelName/MassDelete.php.stub': ControllerAdminhtmlModelNameMassDeletePhpStub,
      'Controller/Adminhtml/ModelName/NewAction.php.stub': ControllerAdminhtmlModelNameNewActionPhpStub,
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
      'registration.php',
      'etc/acl.xml',
      'etc/di.xml',
      'etc/module.xml',
    ].includes(this.getPath())
  }
}
