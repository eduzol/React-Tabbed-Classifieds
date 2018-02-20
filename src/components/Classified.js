import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Classified extends Component {

    render() {

        let categories = this.props.classifieds.categories;

        return (
          <Tabs>
                <TabList>
                {categories.map( (category) => 
                  <Tab key={category.categoryId}>{category.categoryName}</Tab>
                )}
                </TabList>
                {categories.map( (category) => 
                  <TabPanel key={category.categoryId}>
                    <h2>{category.content}</h2>
                  </TabPanel>
                )}
          
           </Tabs>
        );
      }

}

export default  Classified;
