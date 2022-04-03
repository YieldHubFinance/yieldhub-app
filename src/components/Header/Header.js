import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import Dialog from '@material-ui/core/Dialog';
import CustomButton from '../../components/CustomButtons/Button';
import styles from './styles';

const useStyles = makeStyles(styles);

const StyledDialog = withStyles(theme => ({
  paper: {
    margin: '16px',
    backgroundColor: theme.palette.background.primary,
  },
  paperScrollPaper: {
    maxHeight: 'calc(100% - 32px)',
  },
}))(Dialog);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const YieldHub = () => (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Yield
      <span
        style={{
          backgroundColor: 'black',
          color: 'white',
          display: 'block',
          padding: '4px 2px',
          marginLeft: '2px',
          borderRadius: '4px',
        }}
      >
        hub
      </span>
    </span>
  );

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container}>
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <YieldHub />
            </Hidden>
            <Hidden smUp>
              <YieldHub />
            </Hidden>
          </Button>
        </Link>

        <div className={classes.collapse}>{links}</div>
      </Toolbar>
    </AppBar>
  );
};

const InsureLinkSidebar = memo(function InsureLinkSidebar(props) {
  return (
    <div style={{ width: '100%', paddingTop: '10px' }}>
      <InsureLink {...props} />
    </div>
  );
});

const InsureLink = memo(function InsureLink({ t, classes }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback(
    e => {
      e.preventDefault();
      setIsOpen(true);
    },
    [setIsOpen]
  );

  return (
    <>
      <Button
        className={classes.link}
        style={{ marginLeft: '5px', marginRight: '5px' }}
        onClick={handleOpen}
      >
        <i className={`fas fa-shield-alt ${classes.icon}`} />
        <span>{t('insure')}</span>
      </Button>
      <StyledDialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <div className={classes.modalInner}>
          <IconButton className={classes.modalClose} onClick={handleClose}>
            <Close />
          </IconButton>
          <h1 className={classes.modalTitle}>{t('InsurAce-Title')}</h1>
          <div className={classes.modalSections}>
            {t('InsurAce-Sections', { returnObjects: true }).map(section => (
              <div key={section.title} className={classes.modalSection}>
                <h2 className={classes.modalSectionTitle}>{section.title}</h2>
                {section.content.map(paragraph => (
                  <p key={paragraph} className={classes.modalSectionText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <CustomButton
            href="https://app.insurace.io/Insurance/Cart?id=110&chain=BSC&referrer=95244279533280151623141934507761661103282646845"
            target="_blank"
            className={classes.modalButton}
          >
            {t('InsurAce-Button')}
          </CustomButton>
        </div>
      </StyledDialog>
    </>
  );
});

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  return name === 'buy' ? getNetworkBuyUrl() : `https://${name}.yieldhub.finance`;
};

export default Header;
