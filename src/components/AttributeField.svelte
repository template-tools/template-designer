<script>
  export let attribute;
</script>

<label for={attribute.name}>
  {attribute.name} ({attribute.env})
  <input
    aria-label={attribute.name}
    aria-required="true"
    maxlength="75"
    autocorrect="off"
    autocapitalize="off"
    id={attribute.name}
    type="text"
    placeholder={attribute.name}
    name={attribute.name}
    required
    bind:value={attribute.value} />
</label>
