import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Efficient server solution',
    Svg: require('@site/static/img/server-meshing.png').default,
    description: (
      <>
        Server meshing, is today the most efficient solution to handle a large number of players in a single game world.
      </>
    ),
    type: 'png'
  },
  {
    title: 'Implementable in your project',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Celte is a server meshing solution under the form of an <code>SDK</code>, Implementable in any custom game engine.
      </>
    ),
    type: 'svg'
  },
  {
    title: 'Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Celte is designed to be scalable and can adapt to the growth of your project.
      </>
    ),
    type: 'svg'
  },
];

function Feature({Svg, title, description, type}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      {
        type === 'svg' ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={Svg} alt={title} className={styles.featureSvg} />
        )
      }
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
