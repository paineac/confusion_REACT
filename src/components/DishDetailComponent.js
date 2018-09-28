import { Card, CardImg, CardText, CardBody,
        CardTitle, Button, Breadcrumb, BreadcrumbItem, Row, Col, Label, Modal, ModalHeader, ModalBody  } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false
  };
}

toggleModal() {
  this.setState({
      isModalOpen: !this.state.isModalOpen
  });
}

handleSubmit(values) {
 console.log('Current State is: ' + JSON.stringify(values));
 alert('Current State is: ' + JSON.stringify(values));

}

render() {
    return (
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={{size: 3, offset: 1}}>
                            <Control.select model=".rating" name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="yourName" md={2}>Your Name</Label>
                        <Col md={10}>
                            <Control.text model=".yourName" id="yourName" name="yourName"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".yourName"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters ',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Comment</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="12"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            <Button type="submit" color="primary">
                            Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    </div>
    </div>
   )
};
}


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
        if(CommentList.length == 0){
            return (
<               div></div>)}
            else {
                return (
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {CommentList}
                        </ul>
                            <CommentForm/>
                    </div>
                    )
                };
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
