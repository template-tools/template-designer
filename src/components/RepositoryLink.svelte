<script>
  export let object;
</script>

<img
  src="images/{object.provider.constructor.name}.svg"
  width="18"
  height="18"
  alt={object.provider.name} />
{object.fullName}
