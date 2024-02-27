"use client";

import styles from "../page.module.css";
import { work } from "@/app/work";
import { findCurrentProject } from "@/helpers";
import Header from "@/app/Header";

export default function KeepingTime() {
  const projectName = "Keeping Time";
  const currentProject = findCurrentProject(projectName, work) as {
    title: string;
    description: string;
    backgroundColor: string;
    color: string;
    githubLink: string;
    githubLinkDescription: string;
  };
  return (
    <div className={styles.container}>
      <Header currentProject={currentProject} />
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          eget leo eget gravida. Pellentesque vulputate, libero id condimentum
          fermentum, lacus dolor tempor augue, vitae semper justo lectus at
          ante. Cras vitae iaculis nulla. Morbi vitae placerat felis, id
          convallis tellus. Integer viverra sagittis eros eget auctor. Fusce
          pellentesque iaculis ultricies. Integer vestibulum vulputate cursus.
          Sed vel efficitur justo. Proin vestibulum ornare leo at congue.
          Curabitur sit amet sollicitudin mauris. Suspendisse efficitur ornare
          dui id sollicitudin. Nam placerat ultrices orci, et lobortis erat
          faucibus quis. Sed mattis suscipit turpis. Sed dictum turpis vel dolor
          accumsan, non placerat orci bibendum. Sed vel sodales sem. Cras at
          eros sed dolor cursus sollicitudin ut nec ipsum. Aenean at viverra
          ante. Aliquam pharetra eros quis dictum tincidunt. Vivamus dapibus
          finibus tortor, et auctor sapien commodo ut. Proin rhoncus aliquam
          lacus a posuere. Sed convallis nisi at lacinia hendrerit. Integer in
          tortor augue. Aenean mattis sed ante quis posuere. Phasellus ultricies
          molestie diam. In vehicula convallis dapibus. Fusce porttitor purus ac
          porttitor ornare. Nunc mattis eros ullamcorper turpis rutrum, et
          vulputate dui gravida. Pellentesque nec dui sed lacus gravida
          tincidunt. Morbi pulvinar ante ut vehicula semper. Morbi sapien leo,
          varius id mi in, porttitor molestie est. Phasellus tristique
          pellentesque tristique. Sed finibus ut sem non sagittis. Integer massa
          mauris, convallis nec lacus vel, finibus vulputate quam. Cras luctus
          id erat eget ullamcorper. Maecenas dictum nisi quis massa congue, nec
          aliquet nisi vehicula. Proin a consectetur odio. Praesent vitae lacus
          dui. Suspendisse aliquam, libero ut pellentesque condimentum, diam
          enim posuere arcu, at pellentesque turpis enim at magna. Aliquam orci
          dui, tempus sed justo quis, blandit tincidunt dolor. Praesent quis
          purus sed erat tempus mollis. Nullam tincidunt erat eu condimentum
          semper. Donec dapibus mauris vel ligula maximus dapibus sit amet vel
          quam. Vivamus nisl erat, lacinia et interdum in, sagittis ac dolor.
          Morbi tristique erat eu est eleifend dignissim. Aliquam non arcu
          tincidunt, feugiat ante euismod, tincidunt tellus. Mauris in est orci.
          Aliquam elementum dolor eu nisi dignissim pretium. Etiam fermentum,
          metus a porttitor iaculis, orci turpis laoreet lacus, ac auctor nisl
          ex at urna. Phasellus facilisis sem et efficitur tincidunt. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Integer sit amet cursus neque. In vitae sapien ullamcorper elit
          condimentum iaculis sed sit amet tellus. Nam finibus nibh quis nulla
          aliquam, scelerisque ultrices augue blandit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          eget leo eget gravida. Pellentesque vulputate, libero id condimentum
          fermentum, lacus dolor tempor augue, vitae semper justo lectus at
          ante. Cras vitae iaculis nulla. Morbi vitae placerat felis, id
          convallis tellus. Integer viverra sagittis eros eget auctor. Fusce
          pellentesque iaculis ultricies. Integer vestibulum vulputate cursus.
          Sed vel efficitur justo. Proin vestibulum ornare leo at congue.
          Curabitur sit amet sollicitudin mauris. Suspendisse efficitur ornare
          dui id sollicitudin. Nam placerat ultrices orci, et lobortis erat
          faucibus quis. Sed mattis suscipit turpis. Sed dictum turpis vel dolor
          accumsan, non placerat orci bibendum. Sed vel sodales sem. Cras at
          eros sed dolor cursus sollicitudin ut nec ipsum. Aenean at viverra
          ante. Aliquam pharetra eros quis dictum tincidunt. Vivamus dapibus
          finibus tortor, et auctor sapien commodo ut. Proin rhoncus aliquam
          lacus a posuere. Sed convallis nisi at lacinia hendrerit. Integer in
          tortor augue. Aenean mattis sed ante quis posuere. Phasellus ultricies
          molestie diam. In vehicula convallis dapibus. Fusce porttitor purus ac
          porttitor ornare. Nunc mattis eros ullamcorper turpis rutrum, et
          vulputate dui gravida. Pellentesque nec dui sed lacus gravida
          tincidunt. Morbi pulvinar ante ut vehicula semper. Morbi sapien leo,
          varius id mi in, porttitor molestie est. Phasellus tristique
          pellentesque tristique. Sed finibus ut sem non sagittis. Integer massa
          mauris, convallis nec lacus vel, finibus vulputate quam. Cras luctus
          id erat eget ullamcorper. Maecenas dictum nisi quis massa congue, nec
          aliquet nisi vehicula. Proin a consectetur odio. Praesent vitae lacus
          dui. Suspendisse aliquam, libero ut pellentesque condimentum, diam
          enim posuere arcu, at pellentesque turpis enim at magna. Aliquam orci
          dui, tempus sed justo quis, blandit tincidunt dolor. Praesent quis
          purus sed erat tempus mollis. Nullam tincidunt erat eu condimentum
          semper. Donec dapibus mauris vel ligula maximus dapibus sit amet vel
          quam. Vivamus nisl erat, lacinia et interdum in, sagittis ac dolor.
          Morbi tristique erat eu est eleifend dignissim. Aliquam non arcu
          tincidunt, feugiat ante euismod, tincidunt tellus. Mauris in est orci.
          Aliquam elementum dolor eu nisi dignissim pretium. Etiam fermentum,
          metus a porttitor iaculis, orci turpis laoreet lacus, ac auctor nisl
          ex at urna. Phasellus facilisis sem et efficitur tincidunt. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Integer sit amet cursus neque. In vitae sapien ullamcorper elit
          condimentum iaculis sed sit amet tellus. Nam finibus nibh quis nulla
          aliquam, scelerisque ultrices augue blandit.
        </p>
      </div>
    </div>
  );
}
