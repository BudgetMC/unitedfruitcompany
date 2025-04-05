import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactElement[]
  backgroundColor?: string
}

const Container = (props: ContainerProps) => (
  <div
    className={styles.container}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {props.children}
  </div>
)

export const FullWidthContainer = (props: ContainerProps) => (
  <div
    className={styles.fullWidthContainer}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {props.children}
  </div>
)

export const WideContainer = (props: ContainerProps) => (
  <div
    className={styles.wideContainer}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {props.children}
  </div>
)


export default Container;
