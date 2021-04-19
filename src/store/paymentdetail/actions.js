import {
  SET_FETCH_STATE,
  BANK_LIST_LOADING,
  BANK_LIST_DATA,
  BANK_LIST_FAIL,
  BANK_LIST_ERROR,
  PAYMENT_DETAIL_LOADING,
  PAYMENT_DETAIL_FETCHED,
  PAYMENT_DETAIL_ERROR,
} from './mutations';

import apiRequestUtil from '../../utils/apiRequest';

const actions = {
  getBankList({ commit }, fetchState) {
    return new Promise((resolve, reject) => {
      commit(BANK_LIST_LOADING, true);
      if (fetchState) {
        commit(BANK_LIST_LOADING, false);
      } else {
        apiRequestUtil
          .get('/bank')
          .then((response) => {
            if (response.status !== 200) {
              const { status, messages } = response;
              throw Error({ status, messages });
            }
            const { success: status, messages } = response.data;
            if (response.status === 200 && status === false) {
              if (
                Object.keys(messages).length > 0 &&
                messages.constructor === Object
              ) {
                let constructMessages = [];
                for (const key in messages) {
                  constructMessages.push(`${key} : ${messages[key]}`);
                }
                commit(BANK_LIST_ERROR, {
                  status,
                  messages: constructMessages.join('\n'),
                });
              } else {
                commit(BANK_LIST_ERROR, {
                  status,
                  messages: JSON.stringify(messages),
                });
              }
            }
            const { data } = response.data;
            commit(BANK_LIST_DATA, { data, messages, status });
            commit(SET_FETCH_STATE, true);
            resolve();
          })
          .catch((error) => {
            if (Object.keys(error).length > 0 && error.constructor === Object) {
              const { success: status, messages } = error;
              commit(BANK_LIST_ERROR, {
                status,
                messages,
              });
            }
            reject(error);
          });
      }
    }).catch((error) => {
      console.log(error);
    });
  },
  submitPaymentDetail({ commit }, paymentDetailData, ) {
    return new Promise((resolve, reject) => {
      commit(PAYMENT_DETAIL_LOADING, true);
      apiRequestUtil
        .post('/save', paymentDetailData, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          commit(PAYMENT_DETAIL_LOADING, false);
          if (response.status !== 200) {
            const { status, messages } = response;
            throw Error({ status, messages });
          }
          const { success: status, messages } = response.data;
          if (response.status === 200 && status === false) {
            if (
              Object.keys(messages).length > 0 &&
              messages.constructor === Object
            ) {
              let constructMessages = [];
              for (const key in messages) {
                constructMessages.push(`${key} : ${messages[key]}`);
              }
              commit(PAYMENT_DETAIL_ERROR, {
                status,
                messages: constructMessages.join('\n'),
              });
            } else {
              commit(PAYMENT_DETAIL_ERROR, {
                status,
                messages: JSON.stringify(messages),
              });
            }
          }
          const { data } = response.data;
          commit(PAYMENT_DETAIL_FETCHED, {
            data,
            status,
            messages,
          });
          resolve();
        })
        .catch((error) => {
          if (!error.response) {
            commit(PAYMENT_DETAIL_ERROR, {
              status: false,
              messages: 'Connection Error',
            });
          } else {
            if (Object.keys(error).length > 0 && error.constructor === Object) {
              const { success: status, messages } = error;
              commit(PAYMENT_DETAIL_ERROR, {
                status,
                messages,
              });
            }
          }
          reject(error);
        });
    }).catch((error) => {
      if (Object.keys(error).length > 0 && error.constructor === Object) {
        const { success: status, messages } = error;
        commit(PAYMENT_DETAIL_ERROR, {
          status,
          messages,
        });
      }
    });
  },
  unsetPaymentDetailStatusMessage({ commit }) {
    const statusmessage = {
      status: false,
      messages: '',
    };
    commit(PAYMENT_DETAIL_ERROR, statusmessage);
  },
};

export default actions;
