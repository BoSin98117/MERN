import React from 'react';

const Tab = (props) => {
    const {setTabText} = props;

    const tabTextHandler = (e) => {
        setTabText({
            text: e.target.value + " content is showing here"
        })
    }


    return (
        <div>

            <input onClick={tabTextHandler} name="tab" type="button" value="Tab 1" />

            <input onClick={tabTextHandler} name="tab" type="button" value="Tab 2" />

            <input onClick={tabTextHandler} name="tab" type="button" value="Tab 3" />
            
        </div>
    )

} 

export default Tab;