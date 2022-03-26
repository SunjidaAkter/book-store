import React from 'react';

const Answers = () => {
    return (
        <div className='container my-5'>
            <h1 className='my-3 text-center'>Q&A</h1>
            <div className="accordion" id='accordionExample'>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How React Works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React  is an open-source JavaScript library. By using this we can build UIs (User Interface) specially for SPAs (Single-page Application). We also use React to create reusable UI components. <strong>React creates HTML elements. When anything new is added to the application, a virtual DOM is created and it is represented as a tree</strong>. React goes through its virtual DOM & then it gets synced with the real DOM. In this case we get trees of objects on the virtual DOM and trees of objects on the real DOM. <strong>By using diff Algorithm React compares the differences between virtual DOM & real DOM. It compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.</strong> React does it all in one single process.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Difference between Props & State?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li> <strong>We use props to pass data from one component to another. On the other hand the state is a local data storage which means local to the component only and cannot be passed to other components.
                                </strong> </li>
                                <li>Props are immutable But state is mutable.
                                </li>
                                <li>We can use props for making components reusable but state cannot make components reusable.
                                </li>
                                <li>Props are external and controlled by whatever renders the component on the other hand state is internal and controlled by the React Component itself.
                                </li>
                                <li>Props are read-only whether state changes can be asynchronous.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answers;