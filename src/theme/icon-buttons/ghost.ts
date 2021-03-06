export default {
  bg: 'white',

  borderColor: 'white',

  ':hover': {
    bg: 'primaryGrayShade2',
    borderColor: 'primaryGrayShade2',
  },

  ':active': {
    bg: 'primaryGrayShade2',
    borderColor: 'primaryGray',
  },

  ':disabled': {
    borderColor: 'primaryGrayShade1',
  },

  // Icon color
  '& path': {
    fill: 'dark',
  },

  //  Tooltip
  '> span': {
    bg: 'dark',
    color: 'white',

    // Arrow
    ':after': {
      borderBottomColor: 'dark',
    },
  },
};
