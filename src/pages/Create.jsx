import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
function Create() {
    return (
        <div>
            <Typography variant="h1" align="center" gutterBottom>
                Create Note
            </Typography>
            <Button type="submit" color="secondary" variant="contained">Submit</Button>
        </div>
    );
}

export default Create;
