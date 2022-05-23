import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16'>

            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box md:w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    Lazy loading images in React.
                    collapseclassMemoizing React components to prevent unnecessary re-renders.
                    Keeping component state local where necessary
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                </div>
            </div>


            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box md:w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are four main types of state you need to properly manage in your React State
                    <p> 1) Local state</p>
                    <p> 2) Global state</p>
                    <p> 3) Server state</p>
                    <p>4) URL state</p>
                </div>
            </div>


            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box md:w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content">
                    I should never set the state directly because of the following reasons:
                    1) If I set it directly, calling the setState() afterward may just replace the set i made.
                    2) When i directly set the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    3) I will lose control of the state across all components.
                </div>
            </div>

            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box md:w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                Unit tests only test a single part of your implementation. A unit. No dependencies or integrations, no framework specifics. They're like a method that returns a link in a specific language:
                </div>
            </div>


            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box md:w-3/4 mx-auto mb-3">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;