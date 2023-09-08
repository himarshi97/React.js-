import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Read } from "../action";
import { Row } from "reactstrap";

const Readdata = () => {
    const dispatch = useDispatch();

    // const read = useSelector((state) => ({
    //     read: state.read,
    // }));
    const read = useSelector((state) => state.read);

    console.log(read);
    useEffect(() => {
        dispatch(Read());
    }, [dispatch]);
    return (
        <>
            {/* {loading ? (
                <div className="loading"> loading....</div>
            ) : (
                <> */}
            {read !== null && (
                <Row className="row">
                    <div className="inner">
                        <ul>
                            {read.articles.map((item, index) => (
                                <li key={index} className="li">
                                    <div>{item.author}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Row>
            )}
        </>
        //     )}
        // </>
    );
};
export default Readdata;
