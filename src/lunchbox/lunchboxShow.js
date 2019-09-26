import { ShowController } from 'ra-core';
import React from 'react';
import {
  ArrayField,
  BooleanField,
  CloneButton,
  ChipField,
  Datagrid,
  DateField,
  EditButton,
  NumberField,
  ReferenceArrayField,
  ReferenceManyField,
  RichTextField,
  SelectField,
  ShowView,
  SingleFieldList,
  Tab,
  TabbedShowLayout,
  TextField,
} from 'react-admin';

// const TagsField = ({ record }) => {
//   console.log(record)
//   return(
//     <ul>
//       {
//         record.products.map(item => {
//           const currentToken = localStorage.getItem('token')
//           debugger
//           return (
//             <p key={item}>{item}</p>
//           )
//           }
//         )
//       }
//     </ul>
//   )
// }
// TagsField.defaultProps = { addLabel: true };

const LunchboxShow = props => {

  return(
    <ShowController title={"Kek title"} {...props}>
      {controllerProps =>{
        // debugger
        return (
        <ShowView {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="Detail info">
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="price" />
              <BooleanField source="archived" />
              <BooleanField source="locked" />
              <BooleanField source="stock" />
              {/*<TagsField source="products" />*/}
            </Tab>
            <Tab label="Products">
              <TextField source="products" />
              {/*<TagsField source="products" />*/}
            </Tab>
          </TabbedShowLayout>
        </ShowView>
      )}
      }
    </ShowController>
  );
}
export default LunchboxShow;
