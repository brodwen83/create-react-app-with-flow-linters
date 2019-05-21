import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import classNames from 'classnames';
import AppMenu from './AppMenu';

import './App.scss';

type State = {
  mobileMenuActive: boolean,
  themeMenuActive: boolean
};

class AppContainer extends Component<*, State> {
  constructor() {
    super();
    this.state = {
      mobileMenuActive: false,
      themeMenuActive: false
    };
    this.theme = 'nova-light';
  }

  onMenuButtonClick = () => {
    this.toggleMenu();
  };

  onMenuButtonKeyDown = (event: Object) => {
    if (event.key === 'Enter') {
      this.toggleMenu();
    }
  };

  onThemeChangerKeyDown = (event: Object) => {
    if (event.key === 'Enter') {
      event.target.click();
    }
  };

  toggleMenu() {
    this.setState(
      {
        mobileMenuActive: !this.state.mobileMenuActive
      },
      () => {
        if (this.state.mobileMenuActive) this.bindMenuDocumentClickListener();
        else this.unbindMenuDocumentClickListener();
      }
    );
  }

  bindMenuDocumentClickListener = () => {
    if (!this.menuDocumentClickListener) {
      this.menuDocumentClickListener = (event: Object) => {
        if (!this.isMenuButtonClicked(event)) {
          this.setState({ mobileMenuActive: false });
          this.unbindMenuDocumentClickListener();
        }
      };

      document.addEventListener('click', this.menuDocumentClickListener);
    }
  };

  unbindMenuDocumentClickListener = () => {
    if (this.menuDocumentClickListener) {
      document.removeEventListener('click', this.menuDocumentClickListener);
      this.menuDocumentClickListener = null;
    }
  };

  isMenuButtonClicked = (event: Object) => {
    return event.target === this.menuButton;
  };

  renderHome = () => (
    <div className='layout-wrapper'>
      <div className='layout-topbar'>
        <span
          role='button'
          className='menu-button'
          tabIndex='0'
          onClick={this.onMenuButtonClick}
          onKeyDown={this.onMenuButtonKeyDown}
        >
          <i className='pi pi-bars' />
        </span>
        <Link to='/' className='logo'>
          <img alt='logo' src='showcase/resources/images/primereact-logo.png' />
        </Link>

        <ul className='topbar-menu p-unselectable-text'>
          <li>
            <Link to='/setup'> GET STARTED </Link>
          </li>
        </ul>
      </div>

      <div
        role='menuitem'
        id='layout-sidebar'
        className={classNames({
          active: this.state.mobileMenuActive
        })}
        onClick={this.onSidebarClick}
        onKeyDown={this.onSidebarClick}
        tabIndex={0}
      >
        <AppMenu />
      </div>

      <div
        className={classNames({ 'layout-mask': this.state.mobileMenuActive })}
      />

      <div id='layout-content'>
        <Switch />
      </div>
    </div>
  );

  onSidebarClick: any;

  theme: any;

  documentClickListener: any;

  themeMenu: any;

  darkDemoStyle: any;

  sidebar: any;

  menuDocumentClickListener: any;

  menuButton: any;

  render() {
    return this.renderHome();
  }
}

export default AppContainer;
