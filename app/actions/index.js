import * as constants from '../constants/constants';

const formUpdate = (label, value) => ({
  type: constants.FORM_UPDATE,
  label,
  value,
});

export default formUpdate;
