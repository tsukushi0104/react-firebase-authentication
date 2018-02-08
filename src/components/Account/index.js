import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { ProfileEditForm }  from '../ProfileEdit';
import withAuthorization from '../Session/withAuthorization';

import { Divider, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Profile', 
    render: () => 
      <Tab.Pane>
        <ProfileEditForm />
      </Tab.Pane> 
  },
  { menuItem: 'Security', 
    render: () => 
      <Tab.Pane>
        <PasswordForgetForm />
        <Divider section />
        <PasswordChangeForm />
      </Tab.Pane> 
  },
]


const AccountPage = (props, { authUser }) =>
  <div>
    <Tab menu={{ vertical: true }} panes={panes} />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);