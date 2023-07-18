import React, { useEffect, useState } from "react";
import {
    Card,
    CardTitle,
    CardText,
    Button,
    ButtonGroup,
    Col,
    Row,
    Container,
} from "reactstrap";
import axios from "axios";

const Repository = () => {
    const [issue, setissue] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.github.com/search/repositories?q=Q")
            .then((res) => {
                setissue(res.data.items);
            });
    }, []);
    console.log(issue);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = issue.slice(firstIndex, lastIndex);
    const page = Math.ceil(issue.length / recordsPerPage);
    console.log(page);

    function prePage() {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1);
        }
    }

    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage);
        }
    }

    return (
        <>
            {records.map((item, index) => (
                <ul key={index}>
                    <Container>
                        <Card
                            outline
                            style={{ padding: "25px 25px 25px 25px" }}
                        >
                            <Row>
                                <Col sm="3">
                                    <img
                                        src={item.owner.avatar_url}
                                        alt="image"
                                        style={{
                                            width: "12rem",
                                            height: "12rem",
                                        }}
                                    />
                                </Col>
                                <Col sm="9">
                                    <CardTitle tag="h2">
                                        {item.full_name}
                                    </CardTitle>
                                    <CardText tag="h3">
                                        {item.description}
                                    </CardText>
                                    <Row>
                                        <ButtonGroup
                                            style={{
                                                marginTop: "1rem",
                                                marginBottom: "2rem",
                                            }}
                                        >
                                            <Button color="primary" outline>
                                                {" "}
                                                {item.stargazers_count} Star
                                            </Button>
                                            <Button color="primary" outline>
                                                {" "}
                                                {item.open_issues} Issue
                                            </Button>{" "}
                                        </ButtonGroup>
                                    </Row>

                                    <CardText tag="h6">
                                        {" "}
                                        Last pushed by {
                                            item.pushed_at
                                        } Owner {item.owner.login}
                                    </CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </ul>
            ))}

            <div className="data">
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prePage}>
                            Prev
                        </a>
                    </li>

                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Repository;
