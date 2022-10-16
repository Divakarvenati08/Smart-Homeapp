import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Home'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.ConnectedDevices}
                items={[SLUGS.ConnectedDevices]}
                title='Devices'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.ConnectedDevices}
                    title='Connected Devices'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ConnectedDevices)}

                />
                {/* <MenuItem
                    id={SLUGS.overviewTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.overviewTwo)}
                /> */}
                <MenuItem
                    id={SLUGS.overviewTwo}
                    level={2}
                    icon={IconArticles}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.ParentalControls}
                title='Parental Controls'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.ParentalControls)}
            />
            <MenuItem
                id={SLUGS.WiFiSettings}
                title='Wi-Fi- Settings'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.WiFiSettings)}
            />
            <MenuItem
                id={SLUGS.IPV6Settings}
                title='IPV6 Settings'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.IPV6Settings)}
            />
            <MenuItem
                id={SLUGS.PortSettings}
                title='Port Settings'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.PortSettings)}
            />
            <MenuItem
                id={SLUGS.NetworkProperties}
                title='Network Properties'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.NetworkProperties)}
            />
            <div className={classes.separator}></div>
            {/* <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            /> */}

            {/* <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} /> */}
        </Menu>
    );
}

export default SidebarComponent;
