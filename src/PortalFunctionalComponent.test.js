import { render } from "@testing-library/react";
import PortalFunctionalComponent from "./PortalFunctionalComponent";

describe('Portal PortalFunctionalComponent', () => {
    it('playground', () => {
        const { container,rerender } = render(<PortalFunctionalComponent refresh='1'>
            <p style={{ backgroundColor: 'red', position: 'absolute', top: '0px' }}>Learn React</p>
        </PortalFunctionalComponent>);

        rerender(<PortalFunctionalComponent refresh='2'>
        <p style={{ backgroundColor: 'red', position: 'absolute', top: '0px' }}>Learn React</p>
    </PortalFunctionalComponent>)
        container.refresh = 'abc';
        
    })

});