import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useLaunchpoolUpdates } from '../redux/hooks';
import { launchpools, appNetworkId } from '../../helpers/getNetworkData';
import { StakePoolsPool } from './StakePoolsPool';

const useStyles = makeStyles(styles);

export default function StakePools() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState('faq-1');
  const [showPools, setShowActive] = React.useState('active');
  useLaunchpoolUpdates();

  const handleChange = useCallback(
    panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    },
    [setExpanded]
  );

  const handleShowPools = useCallback(
    (event, value) => {
      setShowActive(value);
    },
    [setShowActive]
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.launchpool}>
          <img alt="Launchpool" src={require('images/stake/launchpool.png')} />
        </div>
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: '20px', textAlign: 'right' }}>
        <ToggleButtonGroup value={showPools} exclusive onChange={handleShowPools}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Live</ToggleButton>
          <ToggleButton value="closed">Finished</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container spacing={4} justify={'center'}>
        {Object.values(launchpools).map(pool => (
          <StakePoolsPool key={pool.id} pool={pool} showPools={showPools} classes={classes} t={t} />
        ))}
      </Grid>
      <Grid container spacing={4} justify={'center'}>
        <Grid className={classes.faq} item xs={12} lg={9}>
          <Accordion square expanded={expanded === 'faq-1'} onChange={handleChange('faq-1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I use YieldHub Launchpool?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <img
                  alt="launchpool how to"
                  src={require('images/stake/f1.png')}
                  style={{ width: '100%', marginBottom: '20px' }}
                />
                Look for a boosted partner Vault in our main app and stake the tokens that are asked
                for in the vault. You will get a “receipt” called yhToken in your wallet. Proceed to
                the related partner Launchpool vault here on the YieldHub Launchpool site and enter
                the corresponding vault (or press the shortcut on the main vault page called Boost).
                The vault will ask for you to stake youryhToken “receipts''. Stake these yhTokens
                and you are all done, you can easily come back here and follow your earned partner
                tokens and withdraw at any time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-2'} onChange={handleChange('faq-2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I see my earned tokens?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enter the vault where you deposited your yhTokens and it will show you a nice
                summary of your earned tokens.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-3'} onChange={handleChange('faq-3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How long will the Boosted vault last?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since we introduced multiple partner vaults at different times, there is a timer
                shown on each partner vault. This is nothing you really need to keep track of since
                you can always come back after a vault is finished and withdraw then.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-4'} onChange={handleChange('faq-4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Do I have to manually unstake from the Launchpool vault when it’s finished?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! Just come back after a partner vault is finished and you can unstake your
                deposited yhTokens together with the partner tokens, at any time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-5'} onChange={handleChange('faq-5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can I enter multiple Launchpool vaults at once?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! Just deposit the required tokens in one or multiple of our boosted
                vaults, one by one, and then deposit your yhTokens (vault receipts) in the
                accompanied partner vaults. Repeat this step for every boosted partner vault you
                want to be a part of.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-6'} onChange={handleChange('faq-6')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>I can’t see my deposited tokens in the Boosted vault!</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No worries! Your deposit is safe and where it should be! Since you have deposited
                your yhTokens (vault receipts) in one of our partner vaults, the main boosted vault
                don’t see these receipts in your wallet, hence it shows you zero. As soon as you are
                finished with a partner vault, you withdraw your yhTokens (receipts) back to your
                wallet and your initial vault deposit will show up again.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-7'} onChange={handleChange('faq-7')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What are yhTokens?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A yhToken can be seen as a receipt that you get when depositing into any YieldHub
                vault. This is a fully automatic process. For example, you receive ‘mooBIFI’ tokens
                from depositing $BIFI into the YieldHub Maxi vault. These yhTokens do not 1:1
                represent the token amount initially deposited but it does represent the value of
                your share in the vault. As a vault generates profit, the amount of yhTokens in your
                wallet remain constant while the underlying invested token amount in the vault
                increases. Whenever you want to withdraw the tokens that are staked for you in the
                vault, you need your receipt (yhTokens) which you hand in to redeem the deposited
                tokens + yield. YieldHub.Finance users should hold on tightly to the yhTokens i.e.
                deposit receipts and not sell or exchange them to strangers or you will lose
                ownership of your staked assets in the vault.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-8'} onChange={handleChange('faq-8')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Why do I have less yhToken than the amount of tokens I deposited?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The yhTokens represent the share of the vault the user has. As the vault generates
                profit, the deposited token amount in the vault increases while the amount of shares
                (yhTokens) in your wallet remain constant. If you deposit at a time when the vault
                has been operating for a while, the ratio between deposited tokens and yhTokens will
                be off from the initial 1:1 ratio, and continues to diverge from it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-9'} onChange={handleChange('faq-9')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is mooBIFI?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                mooBIFI is the token you receive from depositing $BIFI into the YieldHub Maxi vault.
                These yhTokens do not 1:1 represent the token amount initially deposited but it does
                represent the value of your share in the vault. The YieldHub Maxi vault gathers a
                performance fee from every YieldHub Vault when they are harvested, and uses it to
                buy more $BIFI and redeposit in the vault. The more profit the YieldHub generates,
                the more $BIFI you'll own in the vault. Do NOT sell your yhTokens, or else you lose
                access to your deposit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-10'} onChange={handleChange('faq-10')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Are these partner vaults safe to use?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! These partner vaults are hosted by YieldHub and are completely safe. YieldHub
                has gotten tokens from our partners and uses our own vaults for the reward. Those
                yhTokens your stake doesn’t leave YieldHub.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-11'} onChange={handleChange('faq-11')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                If I enter a partner vault with my yhTokens, will I still earn the ordinary vault
                reward?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! The ordinary tokens you deposited in our main vaults even if it’s boosted will
                earn the ordinary reward and be compounded as usual. What you place in these partner
                vaults is your “receipt” from the ordinary vault that normally is worth nothing. By
                using these partner vaults, you earn both tokens on the ordinary vault and tokens
                from our partner vaults.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-12'} onChange={handleChange('faq-12')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Why is APY and Daily rates not matching?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                That’s because APR and APY show two different things. APR means “Annual Percentage
                Rate” and is a fixed rate. YieldHub shows APR by dividing the annual yield into 365
                days and presents that to you as “Daily”. APY on the other hand means “Annual
                percentage yield” which is when you take the daily yield and compound it. YieldHub
                compounds your rewards automatically most of the time multiple times a day, this
                makes the APY much higher than a yearly APR would be.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-13'} onChange={handleChange('faq-13')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How come the APY shown when deposited is not the same now?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                APY is the “Annual percentage yield” and is your daily yield compounded. The daily
                yield in turn is based on factors such as the yield rate and the total amount
                deposited that share this yield. When more people and in turn tokens enter the pool,
                the fixed yield is shared by more people (tokens) hence the daily yield will become
                lower and in turn, lower the APY. In the same way, if people (tokens) exit the
                vault, there are fewer people (tokens) sharing the fixed reward and the daily yield
                will increase and in turn, APY will increase.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-14'} onChange={handleChange('faq-14')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Are the promoted project and its tokens safe?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                When partnering with a certain project, YieldHub always tries to make an overall
                check of the project to get a sense of its sincerity and safety. Before adding
                vaults that are hosted by the partnering project, we also try to look for
                vulnerabilities in the code. Despite all this, we can never be 100% sure about a
                partner, hence it’s up to you to make sure that the partnering project is a project
                that you want to support. YieldHub cannot, and will not take any responsibility for
                your personal actions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Disclaimer />
        </Grid>
      </Grid>
    </Grid>
  );
}

StakePools.defaultProps = {
  fromPage: 'page',
};
