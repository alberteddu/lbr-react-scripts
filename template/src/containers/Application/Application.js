import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Hello } from 'app/components/example/Hello';

const Application = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={() => <Hello name="React" />} />
        </div>
    </BrowserRouter>
);

export default Application;
