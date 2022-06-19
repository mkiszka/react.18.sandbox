import React from "react";
import ReactDOM from "react-dom/client";
import ProgressBar from "../../components/ProgressBar";
import { render, screen, within } from '@testing-library/react';
import { act } from "react-dom/test-utils";

describe('ProgressBar', () => {
    it('should be rendered as div element - testing library', () => {
       const { container } = render(<ProgressBar/>);
       expect(container.nodeName).toBe('DIV');
    })
});

describe('ProgressBar', () => {
    //https://reactjs.org/docs/test-utils.html#act
    //https://reactjs.org/docs/test-utils.html
    it('should be rendered as div element - react-dom/test-utils act()', () => {
        const container = document.createElement('div');
        act(() => {
            const root = ReactDOM.createRoot(container);        
            root.render(<ProgressBar/>);        
        });

        expect(container.childNodes[0].nodeName).toBe('DIV');
    })
});
