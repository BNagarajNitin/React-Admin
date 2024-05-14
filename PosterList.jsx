import { Datagrid, ImageField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const PosterList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories" />
            <TextField source="title" />
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <ImageField source="thumbnail" title='tittle' 
            sx={{"& img":{maxWidth:80,maxHeight:'80', objectFit:"contain"}}} />
            <TextField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" />
        </Datagrid>
    </List>
);