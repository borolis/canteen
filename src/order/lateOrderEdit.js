import React from 'react';
import {
  AutocompleteArrayInput,
  ArrayInput,
  BooleanInput,
  CheckboxGroupInput,
  Datagrid,
  DateField,
  DateInput,
  DisabledInput,
  Edit,
  CardActions,
  CloneButton,
  ShowButton,
  EditButton,
  FormTab,
  ImageField,
  ImageInput,
  LongTextInput,
  NumberInput,
  ReferenceArrayInput,
  ReferenceManyField,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  TextField,
  TextInput,
  minValue,
  number,
  required,
} from 'react-admin';
// import StockButton from './stockButton' // eslint-disable-line import/no-unresolved

const EditActions = ({
  basePath,
  className,
  data,
  hasShow,
  hasList,
  resource,
  ...rest
}) => (
  <CardActions className={className} {...rest}>
    <CloneButton
      className="button-clone"
      basePath={basePath}
      record={data}
    />
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </CardActions>
);

const LateOrderEdit = props => (
  <Edit title='Kek title' actions={<EditActions />} {...props}>
    <TabbedForm defaultValue={{ average_note: 0 }}>
      <FormTab label="post.form.summary">
        <DisabledInput source="id" />
        <TextInput source="name" validate={required()} resettable />
        <NumberInput source="price" resettable />
        {/*<StockButton/>*/}
        {/*<BooleanInput label="Lock" source="locked" />*/}
        {/*<BooleanInput label="In stock" source="stock" />*/}
        {/*<BooleanInput label="Is archived" source="archived" />*/}

      </FormTab>
    </TabbedForm>
  </Edit>
);

export default LateOrderEdit;
