import React from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {

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

    function RenderComments({comments}) {
        const CommentList = comments.map(i =>
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

        if(CommentList.length > 0){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {CommentList}
                    </ul>
                </div>)}

        else {
            return (
                (<div></div>)
            )
            }
        }

        const  DishDetail = (props) => {
            if(props.dish != null) {
                return (
                   <div className="container">
                   <div className="row">
                       <Breadcrumb>
                           <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                           <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                       </Breadcrumb>
                       <div className="col-12">
                           <h3>{props.dish.name}</h3>
                           <hr />
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12 col-md-5 m-1">
                           <RenderDish dish={props.dish} />
                       </div>
                       <div className="col-12 col-md-5 m-1">
                           <RenderComments comments={props.comments} />
                       </div>
                   </div>
                   </div>
          )}
              else {
                  return (
                      (<div></div>)
                  )
                  }
          }


     export default DishDetail;
