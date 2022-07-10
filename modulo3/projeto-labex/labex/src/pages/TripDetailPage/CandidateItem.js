import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const CandidateItem = (props) => {
  return (
    <div>
      <ListItem>
        <ListItemText primary={props.candidate} />
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
        <IconButton>
          <ThumbDownAltIcon />
        </IconButton>
      </ListItem>
    </div>
  );
};
export default CandidateItem;
