import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './SettingsModalStyles';
import SettingsSpreadsheet from '../SettingsSpreadsheet/SettingsSpreadsheet';
import SettingsTable from '../SettingsTable/SettingsTable';
import SettingsClear from '../SettingsClear/SettingsClear';

export default function SettingsModal(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { open, handleClose, panel } = props;
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (panelItem) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelItem : false);
    };

    React.useEffect(() => {
        if (panel) {
            setExpanded(panel);
        } else {
            setExpanded('panel1');
        }
    }, [panel]);

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <div className={classes.modalHead}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}
                    >
                        <div className={classes.modalTitle}>{t('settings')}</div>
                        <IconButton aria-label="close" onClick={() => handleClose()}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    {/* <Button variant="outlined" size="small" onClick={ () => handleSetDemo() }>Demo</Button> */}
                </div>
                <DialogContent className={classes.content}>
                    <div className={classes.root}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className={classes.heading}>{t('spreadsheet_settings')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SettingsSpreadsheet handleClose={handleClose} />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>{t('table_settings')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SettingsTable />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography className={classes.heading}>{t('clear_settings')}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SettingsClear />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
