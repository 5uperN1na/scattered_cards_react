import React from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)

    },

    // test: {
    //     width: 105,
    //     height: 'auto',

    //     @media only screen and (max-width: 600px) {
    //         body {
    //           background-color: lightblue;
    //         }
       
    // },


}))

export default function AltCard() {
    const classes = useStyles()
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 21000 },
        { quarter: 6, earnings: 22000 },
        { quarter: 7, earnings: 1600 },
        { quarter: 8, earnings: 1600 },
        { quarter: 9, earnings: 1600 },
    ]
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={4}
            // direction="row"
            // justify="flex-start"
            // alignItems="flex-start"

            >
                {data.map(elem => (
                    // <Grid item sm={3} key={data.indexOf(elem)}>
                     <Grid item md={3} key={data.indexOf(elem)}>
                        <div className="test">
                            {/* <Card style={data.indexOf(elem) % 2 ? { position: "relative", top: "30px" } : { top: "0px" }  }> */}
                            <Card style={data.indexOf(elem) % 2 ? { position: "relative", top: "30px" } : { top: "0px" }  }>

                                <CardHeader
                                    title={`quarter : ${elem.quarter}`}
                                    subheader={`earnings : ${elem.earnings}`}
                                    style={{backgroundColor: "grey"}}
                                    
                                />
                                <CardContent style={{backgroundColor: "black"}}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        
                                </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </Grid>
                ))}
            </Grid>
        </div>
    )
}