import React, {Component} from 'react'
import {Text, AsyncStorage, View} from 'react-native'

import authFetch from '../authorizer'

import {Button} from '../components/index'
import detailController from '../Controllers/detailController';

export default class Detail extends Component{
    constructor(props){
        super(props)

        this.id = this.props.navigation.getParam('id', undefined)
        this.state={
            user :{
                name: "",
                email: "",
                role: ""
            }
        }

        this.loadData();
    }

    // async loadData(){
    //     const url = "https://tq-template-server-sample.herokuapp.com/users/" + this.id.toString()

    //     authFetch(url, {
    //         method: "GET"
    //     })
    //     .then(user => {
    //         this.setState({
    //             user: user.data
    //         })
    //     })
    //     .catch(console.log)
    // }

    async loadData(){
        detailController.send(this.id)
        .then(user => {
            this.setState({
                user: user.data
            })
        })
    }

    parseDate(){
        if(!this.state.user.createdAt) return "01 / 01 / 2018"
        let date = this.state.user.createdAt
        date = date.substring(0, 10)
        date = date.split('-')
        date = date[1] + ' / ' + date[2] + ' / ' + date[0]
        return date
    }
    

    render(){
        ({container, primary, secondary, terciary, header, buttonContainer, headerFirstRow, headerSecondRow} = styles)
        return (
        <View style={{backgroundColor: '#dddddd', flex: 1}}>
            <View style = {container}>
                <View style={header}>
                    <View style={headerFirstRow}>
                        <Text style = {primary}>{this.state.user.name}</Text>

                        <Button
                            linkLike
                            color='white'
                            onPress={() => this.props.navigation.navigate("SignUp", {
                                name: this.state.user.name,
                                email: this.state.user.email,
                                admin: this.state.user.role,
                                id: this.id
                            })}
                        >Edit</Button> 
                    </View>

                    <View style={headerSecondRow}>
                        <Text style = {terciary}>{this.state.user.role}</Text>
                    </View>
                </View>
                
                
                <Text style={terciary}>Email:</Text>
                <Text style = {secondary}>{this.state.user.email}</Text>
                <Text style={terciary}>Created:</Text>
                <Text style={secondary}> {this.parseDate()}</Text>
            </View>
        </View>
        )
            
    }
}

const styles = {
    container: {
        backgroundColor: '#f0f0f0',
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 3,


    },
    primary: {
        color: '#0af',
        fontSize: 30,
        marginTop: 20, 
        marginBottom: 20, 
        marginLeft: 20
    },
    secondary: {
        color: '#0af',
        fontSize: 17,
        margin: 20
    },
    terciary: {
        color: 'grey',
        fontSize: 17,
    },
    emailStyle: {
        color: '#08a',
        fontSize: 19,
        margin: 10
    },
    dateStyle: {
        color: '#08a',
        fontSize: 19,
        margin: 10
    },
    header: {
        backgroundColor: '#333942',
        marginLeft : -20,
        marginTop: -30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    headerFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    headerSecondRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 30,
        marginTop: -15,
        marginBottom: 18
    }
}