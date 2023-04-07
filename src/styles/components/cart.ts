import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches/react';

const fadeInAnimation = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
})

const fadeOutAnimation = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
})

export const ButtonContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 6,
    cursor: 'pointer',
    width: '3.5rem',
    height: '3.5rem',
    background: '$gray800',
    border: 'none'
})

export const ButtonCartLength = styled('div', {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2rem',
    height: '2rem',
    background: '$green500',
    borderRadius: '50%',
    border: '3px solid $gray900',
    color: '$white',
    fontSize: '0.75rem',
    fontWeight: 'bold',
})

export const ModalOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0 0 0 / 0.7)',
    backdropFilter: 'blur(4px)',

    "&[data-state='open']": {
        animation: `${fadeInAnimation} 0.1s ease-in`
    },

    "&[data-state='closed']": {
        animation: `${fadeOutAnimation} 0.1s ease-out`
    }
})

export const ModalTitle = styled(Dialog.Title, {
    fontSize: '1.25rem'
})

export const ModalContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: '-100%',
    padding: '72px 48px',
    width: '100%',
    maxWidth: '30rem',
    height: '100vh',
    background: '$gray800',

    "&[data-state='open']": {
        right: 0
    },

   
})

export const ModalClose = styled(Dialog.Close, {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    cursor: 'pointer'
})

export const ProductCartWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    marginTop: '3rem',
    overflowY: 'auto',
    height: '19rem',

})

export const ProductCart = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.3rem',
})

export const ProductImage = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '6rem',
    height: '5.8rem',
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)'
})

export const ProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    color: '$gray300',
    fontSize: '1.125rem',

    strong: {
        margin: '12px 0 18px',
        color: '$gray100',
        fontSize: '1.125rem'
    },

    button: {
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ProductsResume = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    marginTop: '2.5rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '$gray100',

        span: {
            fontSize: '1rem'
        },

        strong: {
            fontSize: '1.125rem'
        }
    },

    button: {
        width: '100%',
        height: '79px',
        padding: '20px 32px',
        marginTop: '42px',
        textAlign: 'center',
        background: '$green300',
        border: 'none',
        color: '$white',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        borderRadius: 8,
        cursor: 'pointer',

        transition: 'background 0.2s ease-in-out',

        '&:hover': {
            background: '$green500',
        }
    }
})