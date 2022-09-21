import React, { useState } from "react";


const StringCounter = () => {
    const [value, setValue] = useState("");
    const [showValue, setshowValue] = useState({});
    const onSubmit = (event) => {
        event.preventDefault();
        const chars = {};
        for (const char of value) {
            chars[char] = (chars[char] || 0) + 1;
        }
        setshowValue(chars);
        return Object.entries(chars)
            .filter((char) => char[1] > 1)
            .map((char) => char[0]);
    };
    return (
        <>
            <div id="div1">
                <center> <h5 className="w-50 mx-auto px-5">Alphabet Counter</h5></center>
                <form className="row g-3 mx-auto w-50 mt-5 px-5" onSubmit={onSubmit}>
                    <div className="col-auto ">
                        <label htmlFor="inputName" value="Type Your Name" className="visually-hidden">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Type Your Name"
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" id="btn" className="btn btn-primary mb-3">
                            Count
                        </button>
                    </div>
                    {/* <div className="col-auto">
                        <button type="reset" onClick={() => setshowValue({}) && setValue(null)} className="btn btn-danger mb-3"> Reset </button>
                    </div> */}
                </form>
                {Object.keys(showValue).length >= 1 ? (
                    <table className="table table-hover w-50 mx-auto ">
                        <thead>
                            <tr>
                                {/* <th scope="col">Index</th> */}
                                <th scope="col">Character</th>
                                <th scope="col">Counter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(showValue).map(([key, value], index) => {
                                return (
                                    <tr key={index}>
                                        {/* <th className="w-25" scope="row">
                    {index + 1}
                  </th> */}
                                        <td className="w-25">{key === " " ? "Space" : key}</td>
                                        <td className="w-25">{value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <h className="w-50 mx-auto px-5"></h>
                )}
            </div>
        </>
    );
};

export default StringCounter;
