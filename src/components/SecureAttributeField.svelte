<script>
  export let attribute;
</script>

<label for={attribute.name}>
  {attribute.name} ({attribute.env})
  <input
    aria-label={attribute.name}
    aria-required={attribute.mandatory ? "true" : "false"}
    maxlength="128"
    size="60"
    autocorrect="off"
    autocapitalize="off"
    id={attribute.name}
    type="password"
    placeholder={attribute.name}
    name={attribute.name}
    required
    bind:value={attribute.value} />
</label>