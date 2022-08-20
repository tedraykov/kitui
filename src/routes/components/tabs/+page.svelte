<script>
  import Typography from "$lib/components/Typography.svelte";
  import Container from "$lib/components/Container.svelte";
  import TabGroup from "$lib/components/TabGroup.svelte";
  import Tab from "$lib/components/Tab.svelte";
  import TabList from "$lib/components/TabList.svelte";
  import TabPanels from "$lib/components/TabPanels.svelte";
  import TabPanel from "$lib/components/TabPanel.svelte";
  import Card from "$lib/components/Card.svelte";
  import CardContent from "$lib/components/CardContent.svelte";
</script>

<Container class="py-4">
  <Typography variant="h3" class="mb-4">Tabs</Typography>
  <Card>
    <CardContent>
      <TabGroup>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel>
            <Typography variant="h3" class="pb-2">Content 1</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aspernatur deleniti, et
              illum impedit iste iusto minima nam nobis obcaecati perspiciatis sit ullam. Beatae culpa inventore
              laborum magni quibusdam.
            </Typography>
          </TabPanel>
          <TabPanel>
            <Typography variant="h3" class="pb-2">Content 2</Typography>
            <Typography>
              Amet architecto aspernatur deleniti, et
              illum impedit iste iusto minima nam nobis obcaecati perspiciatis sit ullam. Beatae culpa inventore
              laborum magni quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </CardContent>
  </Card>
</Container>
