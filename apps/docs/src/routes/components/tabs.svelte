<script>
  import Typography from "kitui/components/Typography.svelte";
  import Container from "kitui/components/Container.svelte";
  import TabGroup from "kitui/components/TabGroup.svelte";
  import Tab from "kitui/components/Tab.svelte";
  import TabList from "kitui/components/TabList.svelte";
  import TabPanels from "kitui/components/TabPanels.svelte";
  import TabPanel from "kitui/components/TabPanel.svelte";
  import Card from "kitui/components/Card.svelte";
  import CardContent from "kitui/components/CardContent.svelte";
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
