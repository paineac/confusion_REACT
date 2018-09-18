import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

      renderDish(dish) {
          if (dish != null) {
              return (
                  <Card>
                    <Card key={dish.id}/>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    );
                }
            else {
                return (<div></div>)
                }
            }

    renderComments(dish) {
         if (dish != null) {
             const commentList = dish.comments.map(i =>
            <li key={i.id}>
                {i.comment}
                <p>--   {i.author},&nbsp;
                {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(i.date)))}</p>
            </li>
            );

        if(commentList.length > 0){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>)}
    }
        else {
            return
                (<div></div>)
            }
        }

        render (){
             const dish = this.props.dish
             return(
                 <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-md-5 m-1">
                            {this.renderComments(dish)}
                        </div>
                    </div>
                </div>
              )
          }
    }

     export default DishDetail;
