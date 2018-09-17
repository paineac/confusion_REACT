import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component {

        constructor(props) {
            super(props);
            this.setState({ text: this.props.comments});
              };

              renderDish(dish) {
                  return (
                      <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                            </Card>

                        );
                    }

                renderComments(text) {
                    const commentList = text.map((iComment) =>
                    <li>
                        {iComment.comment}
                        <p>--   {iComment.author},&nbsp;
                          {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(iComment.date))}</p>
                    </li>
                    );
                    if(commentList)
                        return (
                            <div>
                              <h4>Comments</h4>
                              <ul className="list-inline">{commentList}</ul>
                            </div>)
                    else
                    return (
                        <div>
                        </div>
                    )
                }

                render (){
                    return(
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderDish(this.props.myDish)}
                                </div>
                            <div className="col-md-5 m-1">
                                {this.renderComments(this.props.myDish.comments)}
                            </div>
                        </div>
                            )
                }
    }
     export default DishDetail;
