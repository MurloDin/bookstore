import * as React from 'react';
import { Label, Box, DropZone, DropZoneProps, DropZoneItem } from '@admin-bro/design-system';
import { BasePropertyProps } from "admin-bro";


const Edit: React.FC<BasePropertyProps> = (props) => {

    const { property, onChange, record } = props;

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        onChange(property.name, files[0]);
    };

    const uploadedPhoto = record.params.photoLocation;
    const photoToUpload = record.params[property.name];
    let replaced;
    if (uploadedPhoto) {
        replaced = uploadedPhoto.replace(/\\/g, "/");
    }

    return (
        <Box marginBottom="xxl">
            <Label>{property.label}</Label>
            <DropZone onChange={handleDropZoneChange}/>
            {uploadedPhoto && !photoToUpload && (
                <DropZoneItem src={replaced} />
            )}
        </Box>
    );
};


export default Edit;
