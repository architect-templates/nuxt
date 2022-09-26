import ArchitectHeader from '~/components/ArchitectHeader.vue';
import ArchitectNextSteps from '~/components/ArchitectNextSteps.vue';
import ArchitectSubHeader from '~/components/ArchitectSubHeader';
import ArchitectInput from '~/components/ArchitectInput.vue';
import ArchitectTable from '~/components/ArchitectTable.vue';

import '~/assets/css/main.css';

export default () => {
  const subtitle = 'Favorite Movies';

  return (
    <div class='container'>
          <ArchitectHeader />
          <ArchitectSubHeader subtitle = { subtitle } />
          <ArchitectNextSteps />
          <ArchitectInput />
          <ArchitectTable/>
    </div>
  );
};
