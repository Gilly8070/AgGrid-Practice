import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AGgrid = () => {
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowDragManaged={true}
                suppressRowTransform={true}
                animateRows={true}
                rowData={rowData}>
                <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true} rowDrag={true}></AgGridColumn>
                <AgGridColumn field="model" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                <AgGridColumn field="price" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default AGgrid;
