import {
    NAME,
    EMAIL,
    MANAGER_ID,
    PASSWORD,
    SKILLS,
    CURRENT_PROJECT,
    MANAGER_FLAG,
    STATUS,
    USER_TYPE,
    CONTACT,
    LOCATION,
    SKILL_INPUT
} from '../constants';

const loginFields = [
    {
        label: 'email',
        key: 'email',
        type: 'email',
        placeholder: 'Enter your email...',
    },
    {
        label: 'password',
        key: 'password',
        type: 'password',
        placeholder: 'Enter your password...'
    }
];

const searchFields = [
    {
        label: 'name',
        key: NAME,
        type: 'name',
        placeholder: 'Search by name...',
    },
    {
        label: 'email',
        key: EMAIL,
        type: 'text',
        placeholder: 'Search by email...',
    },
    {
        label: 'skill',
        key: SKILLS,
        type: 'select-multi',
        info: 'You can select more than 1 skill here.',
        options: []
    },
    {
        label: 'current project',
        key: CURRENT_PROJECT,
        type: 'text',
        placeholder: 'Search by Current Project...',
    }
]

const signUpFields = [
    {
        label: 'name',
        key: NAME,
        type: 'name',
        placeholder: 'Enter your name...',
    },
    {
        label: 'email',
        key: EMAIL,
        type: 'email',
        placeholder: 'Enter your email...',
    },
    {
        label: 'password',
        key: PASSWORD,
        type: 'password',
        placeholder: 'Enter your password...'
    },
    {
        label: 'Are you a manager?',
        key: MANAGER_FLAG,
        type: 'toggle',
    },
    {
        label: 'approving manager',
        key: MANAGER_ID,
        type: 'select',
        placeholder: 'Select Approving Manager...',
        options: []
    } 
];

const navConfig = {
    none: {
        default: "/login",
        navLinks: [
            {
                label: "Log In",
                icon: "glyphicon-log-in",
                route: "/login",
                root: true
            },
            {
                label: "Sign Up",
                icon: "glyphicon-user",
                route: "/signup",
                root: true
            }
        ]
    },
    employee: {
        default: "/profile",
        navLinks: [
            {
                label: "My Profile",
                icon: "glyphicon-user",
                route: "/profile",
                root: false
            },
            {
                label: "Search",
                icon: "glyphicon-search",
                route: "/search",
                root: false
            },
            {
                label: "Log Out",
                icon: "glyphicon-log-out",
                route: "/login",
                root: true
            }
        ]
    },
    manager: {
        default: "/requests",
        navLinks: [
            {
                label: "Requests",
                icon: "glyphicon-plus-sign",
                route: "/requests",
                root: false
            },
            {
                label: "Search",
                icon: "glyphicon-search",
                route: "/search",
                root: false
            },
            {
                label: "Log Out",
                icon: "glyphicon-log-out",
                route: "/login",
                root: true
            }
        ]
    }
}

const editFields = [
    {
        label: 'contact',
        key: CONTACT,
        type: 'number',
        placeholder: 'Edit contact number...'
    },
    {
        label: 'project',
        key: CURRENT_PROJECT,
        type: 'text',
        placeholder: 'Edit current project...',
    },
    {
        label: 'location',
        key: LOCATION,
        type: 'text',
        placeholder: 'Edit location...',
    }
]

const skillField = {
        label: 'skill',
        key: SKILL_INPUT,
        type: 'text',
        placeholder: 'Add a skill...'
}

const requestKeys = [
    NAME,
    EMAIL,
    STATUS,
    USER_TYPE
]

const profileKeys = [
    NAME,
    EMAIL,
    USER_TYPE,
]

const editableKeys = [
    SKILLS,
    CONTACT,
    CURRENT_PROJECT,
    LOCATION
]

const finderKeys = [
    NAME,
    LOCATION,
    SKILLS,
    CURRENT_PROJECT
]

const noCapitalize = [
    EMAIL,
    SKILLS,
    CONTACT,
]

const searchKeys = [
    NAME,
    EMAIL,
    SKILLS,
    CURRENT_PROJECT
]

const pendingButtons = [
    {
        style: "active",
        label: "APPROVE",
        action: 'approveRequest'
    },
    {
        style: "delete",
        label: "REJECT",
        action: 'declineRequest'
    }
]

const approvedButtons = [
    {
        style: "active",
        label: "VIEW",
        action: 'viewProfile'
    },
    {
        style: "delete",
        label: "REMOVE",
        action: 'deleteUser'
    }
]

export {
    loginFields,
    signUpFields,
    navConfig,
    requestKeys,
    noCapitalize,
    approvedButtons,
    pendingButtons,
    profileKeys,
    searchFields,
    searchKeys,
    finderKeys,
    editableKeys,
    editFields,
    skillField
}