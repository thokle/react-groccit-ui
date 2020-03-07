import React from 'react';

import './Purchase.css';
import {Button, Container, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField} from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import {makeStyles} from "@material-ui/core/styles";
class Purchase extends React.Component<any, any> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event:any) {

        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data.get('name'));


        fetch('https://green-api-services.azurewebsites.net/purphase', {
      method: 'post'  , body: data, headers: {
                "Content-Type": "application/json"
            }
        }).catch(reason => console.log(reason)).then(value => console.log(value))
    }
    render() {
        // @ts-ignore
        return (
            <Grid item >
                <Container fixed>
                <form  onSubmit={this.handleSubmit}>

                    <p>
                    <Select id="outlined-basic" label="Type" variant="outlined"  >
                        <MenuItem value="Tøj">Tøj</MenuItem>
                        <MenuItem value="kosmetik">Kosmetik</MenuItem>
                        <MenuItem value="sko">Sko</MenuItem>
                        <MenuItem value="sko">Børnetøj</MenuItem>
                    </Select>
                    </p>
                    <p>
                    <TextField variant="outlined" label="Mærke" id="brand" name="brand" size="medium" ></TextField>
                </p>
                    <p>
                        <TextField variant="outlined" label="Farve" id="color" name="color"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="Størrelse" id="size" name="size"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="Pris" type="number" id="price" name="price"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="url" id="url" name="url"></TextField>

                    </p>
                    <p>
                        <TextField variant="outlined" label="Post Nummer" id="postnr" name="postnr"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="By" id="city" name="city"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="E-mail" id="email" name="email"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="Tlf Numer" id="phone" name="phone"></TextField>
                    </p>
                    <p>
                        <TextField variant="outlined" label="Navn" id="name" name="name"></TextField>
                    </p>
                    <p>
                        <TextField multiline rows="4" id="comment" label="Kommentar" name="kommentar"></TextField>
                    </p>
                   <p>
                       <Button variant="contained" type="submit">Opret</Button>
                   </p>
                </form>
            </Container>
            </Grid>
        );
    }
}

export default Purchase;
