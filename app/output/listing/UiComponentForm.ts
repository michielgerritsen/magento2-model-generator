import GeneratedFile from "~/output/GeneratedFile";
import type ColumnInterface from "~/interfaces/ColumnInterface";

export default class UiComponentForm extends GeneratedFile {
    override fileContext() {
        const fileContext = super.fileContext();

        fileContext.UiColumns = this.columns().map(column => this.generateUiColumn(column)).join('');

        return fileContext;
    }

    generateUiColumn(column: ColumnInterface): string {
        if (column.fieldName == this.indexField()) {
            return '';
        }

        if (column.inputType == 'text') {
            return this.columnType(column, 'textarea');
        }

        if (column.inputType == 'date') {
            return this.columnType(column, 'date');
        }

        return this.columnType(column, 'input');
    }

    private columnType(column: ColumnInterface, type: string) {
        return `
        <field name="${column.fieldName}" formElement="${type}">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">${this.modelName()}</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
                <visible>true</visible>
                <label translate="true">${this.friendlyName(column)}</label>
            </settings>
        </field>
        `;
    }
}