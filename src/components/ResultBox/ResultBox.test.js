import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';


  describe('Component ResultBox', () => {

   it('should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />);
      
  });

  it('should render proper info about conversion when PLN -> USD', () => {
   // set test values to fields
   const testCases = [
      { amount: 3.50, from: 'PLN', to: 'USD', result: 'PLN 3.50 = $1.00'},
      { amount: 250, from: 'PLN', to: 'USD', result: 'PLN 250.00 = $71.43' },
      { amount: 0, from: 'PLN', to: 'USD', result: 'PLN 0.00 = $0.00' },
    ];

    for(const testCase of testCases) {

      // render component
      render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);

      // find result output
      const result = screen.getByTestId('result');

      expect(result).toHaveTextContent(testCase.result);

      // unmount component
      cleanup()
    }  
  });
  it('should render proper info about conversion when USD -> PLN', () => {
   // set test values to fields
   const testCases = [
     { amount: 1, from: 'USD', to: 'PLN', result: '$1.00 = PLN 3.50'},
     { amount: 25, from: 'USD', to: 'PLN', result: '$25.00 = PLN 87.50' },
     { amount: 0, from: 'USD', to: 'PLN', result: '$0.00 = PLN 0.00' },
   ];

   for(const testCase of testCases) {

     // render component
     render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);

     // find result output
     const result = screen.getByTestId('result');

     expect(result).toHaveTextContent(testCase.result);

     // unmount component
     cleanup()
   }  
 });
 it('should render proper info about conversion when PLN -> PLN and USD -> USD', () => {
   // set test values to fields
   const testCases = [
      { amount: 1, from: 'PLN', to: 'PLN', result: 'PLN 1.00 = PLN 1.00'},
      { amount: 200, from: 'PLN', to: 'PLN', result: 'PLN 200.00 = PLN 200.00' },
      { amount: 0, from: 'PLN', to: 'PLN', result: 'PLN 0.00 = PLN 0.00' },
      { amount: 1, from: 'USD', to: 'USD', result: '$1.00 = $1.00'},
      { amount: 200, from: 'USD', to: 'USD', result: '$200.00 = $200.00' },
      { amount: 0, from: 'USD', to: 'USD', result: '$0.00 = $0.00' },
   ];

   for(const testCase of testCases) {

     // render component
     render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);

     // find result output
     const result = screen.getByTestId('result');

     expect(result).toHaveTextContent(testCase.result);

     // unmount component
     cleanup()
   }  
 });
 it('should render proper info about conversion when amount < 0', () => {
      // set test values to fields
     const testCases = [
       { amount: -1, from: 'PLN', to: 'USD', result: 'Wrong value...'},
       { amount: -9999, from: 'PLN', to: 'USD', result: 'Wrong value...'},
       { amount: -1, from: 'PLN', to: 'PLN', result: 'Wrong value...'},
       { amount: -9999, from: 'PLN', to: 'PLN', result: 'Wrong value...'},
       { amount: -1, from: 'USD', to: 'PLN', result: 'Wrong value...'},
       { amount: -9999, from: 'USD', to: 'PLN', result: 'Wrong value...'},
       { amount: -1, from: 'USD', to: 'USD', result: 'Wrong value...'},
       { amount: -9999, from: 'USD', to: 'USD', result: 'Wrong value...'},
   ];

   for(const testCase of testCases) {

     // render component
     render(<ResultBox from={testCase.from} to={testCase.to} amount={testCase.amount} />);

     // find result output
     const result = screen.getByTestId('result');

     expect(result).toHaveTextContent(testCase.result);

     // unmount component
     cleanup()
   }    
 })
});