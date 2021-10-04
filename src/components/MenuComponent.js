import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";


class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            selectedDish : null
        }
    }

    SelectDish = (dish) =>{
        this.setState({
            selectedDish: dish
        })
    }

    RenderDish = (dish) => {
        if(dish != null){
            return(
                <div>
                 <Card key={dish.id} onClick={() => this.SelectDish(dish)}>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    <CardImg width="100%" style={{marginTop:5, marginLeft:5}} src={dish.image} alt={dish.name} />
                </Card>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }

    render(){

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.SelectDish(dish)}>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    <CardImg width="100%" style={{marginTop:5, marginLeft:5}} src={dish.image} alt={dish.name} />
                </Card>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.RenderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu