import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <a
        href="https://yieldhubfinance.gitbook.io/yieldhub-docs/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fas fa-book ${classes.linkIcon}`} />
        <span>{t('docs')}</span>
      </a>

      <a
        href="https://github.com/yieldhubfinance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-github ${classes.linkIcon}`} />
        <span>{t('source')}</span>
      </a>

      <a
        href="https://twitter.com/yieldhubfinance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-twitter ${classes.linkIcon}`} />

        <span>twitter</span>
      </a>
      <a
        href="https://discord.gg/gxYaW2C8cs"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-discord ${classes.linkIcon}`} />
        <span>discord</span>
      </a>
      <a
        href="https://medium.com/@yieldhubfinance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-medium ${classes.linkIcon}`} />
        <span>medium</span>
      </a>
    </div>
  );
};

export default memo(Footer);
