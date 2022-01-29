import { render, screen } from '@testing-library/react';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttribute } from "../test/utils/testUtils";

enzyme.configure({ adapter: new Adapter() });

function setup() {
  return enzyme.shallow(<App />);
}

class Page {
  appElements: any;
  div: any;
  header: any;
  h1: any;
  label: any;
  inputSkill: any;
  searchButton: any;
  loadSkillsButton: any;
  addSkillButton: any;

  constructor(component: any) {
    this.appElements = (component.getElement().props.children);
    this.div = findByTestAttribute(component, "div-data-test-id");
    this.header = this.appElements.find((el: { type: string; }) => el.type === 'header');
    this.h1 = findByTestAttribute(component, "h1-data-test-id");
    this.label = findByTestAttribute(component, "label-data-test-id");
    this.inputSkill = findByTestAttribute(component, "input-skill-data-test-id");
    this.searchButton = findByTestAttribute(component, "search-button-data-test-id");
    this.loadSkillsButton = findByTestAttribute(component, "load-skills-button-data-test-id");
    this.addSkillButton = findByTestAttribute(component, "add-skill-button-data-test-id");
  }
}

test('header Developers App to be on screen', () => {
  render(<App />);
  const developerText = screen.getByText(/Developers App/);
  expect(developerText).toBeInTheDocument();
});

test('input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Type the skill you would like to search/);
  expect(labelText).toBeInTheDocument();
});

describe('Test page object', () => {

  const component = setup();
  const page = new Page(component);

  test('Div is created correctly', () => {
    expect(page.div.exists()).toBe(true);
  });

  test('Header is created correctly', () => {
    expect(page.label.exists()).toBe(true);
  });

  test('H1 is created correctly', () => {
    expect(page.h1.exists()).toBe(true);
  });

  test('Label is created correctly', () => {
    expect(page.label.exists()).toBe(true);
  });

  test('Inputs are created correctly', () => {
    expect(page.inputSkill.exists()).toBe(true);
  });

  test('Buttons are created correctly', () => {
    expect(page.searchButton.exists()).toBe(true);
    expect(page.loadSkillsButton.exists()).toBe(true);
    expect(page.addSkillButton.exists()).toBe(true);
  });

});
