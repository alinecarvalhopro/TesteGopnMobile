import React, {createContext, useState} from 'react';

import {Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

export const PlaybookContext = createContext();

export const PlaybookProvider = ({children}) => {
  const [playbooks, setPlaybooks] = useState([]);

  const navigation = useNavigation();

  const createPlaybook = async (formData, setLoading, reset) => {
    setLoading(true);
    try {
      const response = await api.post('/playbooks', formData);
      setPlaybooks([...playbooks, response.data]);
      reset();
      Keyboard.dismiss()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getPlaybooksByUser = async userId => {
    try {
      const response = await api.get(`/users/${userId}/playbooks`);
      setPlaybooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePlaybook = async (playbookId, updatedData) => {
    try {
      const response = await api.patch(`/playbooks/${playbookId}`, updatedData);
      const updatedPlaybooks = playbooks.map(playbook => {
        if (playbook.id === playbookId) {
          return response.data;
        }
        return playbook;
      });
      setPlaybooks(updatedPlaybooks);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to update playbook');
    }
  };

  return (
    <PlaybookContext.Provider
      value={{playbooks, createPlaybook, updatePlaybook, getPlaybooksByUser}}>
      {children}
    </PlaybookContext.Provider>
  );
};
